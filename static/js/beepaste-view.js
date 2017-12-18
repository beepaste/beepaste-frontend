var editor = {};
var ACE = {
	init: function () {
		editor = ace.edit("Editor");


    base64ToText = function() {
        var encoded = editor.getValue();
        // var decoded = Base64.decode(encoded);
        editor.setValue(encoded);
    }

    base64ToText();

    max = function(a, b) {
        if (a >= b) return a;
        return b;
    }

		editor.setTheme("ace/theme/xcode");
    editor.setReadOnly(true);
    editor.setAutoScrollEditorIntoView(true);
    editor.setOption("minLines", max(editor.getSession().getValue().split('\n').length, 10));
    editor.setOption("maxLines", max(editor.getSession().getValue().split('\n').length, 10));
    editor.getSession().setUseWrapMode(true);
    editor.setOptions({fontSize :"13pt"});

		$('#pasteLanguage').change(function() {
				set_language();
		});

		set_syntax = function(mode) {
			editor.getSession().setMode("ace/mode/"+mode);
		};

		set_language = function() {
			var lang = $('#pasteLanguage').val();
			mode = lang;
            console.log("setting syntax " + mode);
			set_syntax(mode);
		};
		set_language();
	}
};


$(document).ready(function() {
    $('select').material_select();
    $('.modal').modal({
        dismissible: false
    });
    var encryption = $('#pasteEncryption').val();
    if (encryption == "passwd") {
        $("#passwdDialog").modal('open');
        $('#passwdSubmit').click(function() {
            var encryptedData = $('#Editor').html();
            var secret = $('#passwd').val();
            if (!secret) {
                $('#passwdError').show();
                return 0;
            }
            var plainData = sjcl.decrypt(secret, encryptedData) ;
            $('#Editor').html(plainData);
            $('#passwd').val("");
            $("#passwdDialog").modal('close');
            ACE.init();
        });
    }else if (encryption == "pgp") {
        $('#pgpDialog').modal('open');
        $('#pgpSubmit').click(function() {
            var secret = $('#pgpkey').val();
            if (!secret) {
                $('#pgpError').show();
                return 0;
            }
            var pass = $('#pgppass').val();
            openpgp.initWorker({ path: '/js/openpgp.worker.min.js'})
            var encryptedData = $('#Editor').html(), priv = openpgp.key.readArmored(secret);
            var success = priv.keys[0].decrypt(pass);
            options = {
                message: openpgp.message.readArmored(encryptedData),
                privateKey: priv.keys[0]
            };

            openpgp.decrypt(options).then(function(plaintext) {
                $('#Editor').html(plaintext.data);
                $('#pgpDialog').modal('close');
                ACE.init();
                return plaintext.data;
            });
        });
    } else{
        ACE.init();
    }
});
