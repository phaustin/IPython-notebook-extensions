// add custom shortcuts

define([
    'base/js/namespace',
    'jquery'
], function(IPython, $) {
    "use strict";

    var add_command_shortcuts = {
        'ctrl-x': {
            help    : 'edit markdown',
            help_index : 'zz',
            handler : function (event) {
                var input = IPython.notebook.get_selected_cell().get_text();
                var cmd = "f = open('temp.md', 'w');f.close()";
                if (input != "") {
                    cmd = '%%writefile temp.md\n' + input;
                }
                IPython.notebook.kernel.execute(cmd);
                cmd = "import os;os.system('/Applications/Emacs.app/Contents/MacOS/bin/emacsclient temp.md')";
                IPython.notebook.kernel.execute(cmd);
                return false;
            }
        },
        'ctrl-p': {
                help    : 'edit python',
                help_index : 'zz',
                handler : function (event) {
                    var input = IPython.notebook.get_selected_cell().get_text();
                    var cmd = "f = open('temp.py', 'w');f.close()";
                    if (input != "") {
                        cmd = '%%writefile temp.py\n' + input;
                    }
                    IPython.notebook.kernel.execute(cmd);
                    cmd = "import os;os.system('/Applications/Emacs.app/Contents/MacOS/bin/emacsclient temp.py')";
                    IPython.notebook.kernel.execute(cmd);
                    return false;
                }
            }
    };

    var load_ipython_extension = function() {
        IPython.keyboard_manager.command_shortcuts.add_shortcuts(add_command_shortcuts);
    };
    var extension = {
        load_ipython_extension : load_ipython_extension
    };
    return extension;
});
