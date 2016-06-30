'use babel';

import ZpAcfSnippetsView from './zp-acf-snippets-view';
import { CompositeDisposable } from 'atom';

export default {

  zpAcfSnippetsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.zpAcfSnippetsView = new ZpAcfSnippetsView(state.zpAcfSnippetsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.zpAcfSnippetsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'zp-acf-snippets:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.zpAcfSnippetsView.destroy();
  },

  serialize() {
    return {
      zpAcfSnippetsViewState: this.zpAcfSnippetsView.serialize()
    };
  },

  toggle() {
    console.log('ZpAcfSnippets was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
