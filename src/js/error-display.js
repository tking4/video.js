import Component from './component';
import * as Lib from './lib';

/**
 * Display that an error has occurred making the video unplayable
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
class ErrorDisplay extends Component {

  constructor(player, options) {
    super(player, options);

    this.update();
    this.on(player, 'error', this.update);
  }

  createEl() {
    var el = super.createEl('div', {
      className: 'vjs-error-display'
    });

    this.contentEl_ = Lib.createEl('div');
    el.appendChild(this.contentEl_);

    return el;
  }

  update() {
    if (this.player().error()) {
      this.contentEl_.innerHTML = this.localize(this.player().error().message);
    }
  }
}

Component.registerComponent('ErrorDisplay', ErrorDisplay);
export default ErrorDisplay;
