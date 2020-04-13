// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

const vscode = require('vscode');
const command = require('./command');

function activate(context) {

  let disposable = vscode.commands.registerCommand('extension.propTypesGenerate', function () {
    command.generate();
  });
  let codeAction = vscode.languages.registerCodeActionsProvider({
    language: 'javascript',
    scheme: 'file'
  }, {
    provideCodeActions: function () {
      return Promise.resolve([
        {
          command: 'extension.propTypesGenerate',
          title: 'PropTypesGenerate',
          tooltip: 'auto generate propTypes',
        }
      ]);
    }
  });
  let codeAction2 = vscode.languages.registerCodeActionsProvider({
    language: 'javascriptreact',
    scheme: 'file'
  }, {
    provideCodeActions: function () {
      return Promise.resolve([
        {
          command: 'extension.propTypesGenerate',
          title: 'PropTypesGenerate',
          tooltip: 'auto generate propTypes',
        }
      ]);
    }
  });
  context.subscriptions.push(disposable);
  context.subscriptions.push(codeAction);
  context.subscriptions.push(codeAction2);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

exports.deactivate = deactivate;
