import * as React from 'react';
import './styles';

interface HiddenScrollBarListProps {
  components: any[];
  height: string;
  width: string;
  outerClasses: string;
  innerClasses?: string;
}

class HiddenScrollBarList extends React.Component<HiddenScrollBarListProps, {}> {

  static getScrollbarWidth = () => {

    // TODO: Test this, doesn't seem to get width and default doesn't do anything

    // Create the measurement node
    var scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    // Delete the DIV
    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
  }

  render() {
    const {
      components,
      innerClasses = "",
      outerClasses = "",
      height,
      width,
    } = this.props;
    const scrollBarWidth = Math.abs(HiddenScrollBarList.getScrollbarWidth() || 15);

    return (
      <section
        className={ `hidden-outer-scroll ${ outerClasses || '' }` }
        style={ { width: `${ width || "100%" }` } }
      >
        <div
          className={ `hidden-inner-scroll ${ innerClasses || '' }` }
          style={ {
            marginRight: `-${ scrollBarWidth }px`,
            maxHeight: height || '400px',
          } }
        >
          { components }
        </div>
      </section>
    );
  }
}

export default HiddenScrollBarList;
