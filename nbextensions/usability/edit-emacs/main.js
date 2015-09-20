// add custom shortcuts

define([
    'base/js/namespace',
    'jquery'
], function(IPython, $) {
    "use strict";

    var add_command_shortcuts = {
            'ctrl-1' : {
                help    : 'edit markdown',
                help_index : 'aa',
                handler : function() {
                    IPython.notebook.edit_mode();
                    return false;
                }
            },

            'ctrl-p': {
                help    : 'edit python',
                help_index : 'aa',
                handler : function() {
                    var index = IPython.notebook.get_selected_index();
                    if (index !== 0 && index !== null) {
                        IPython.notebook.extend_selection('up');
                        IPython.notebook.focus_cell();
                    }
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
