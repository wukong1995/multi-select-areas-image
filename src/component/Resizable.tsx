import React, { Component } from 'react'

class Resizable extends Component {
  state = {
    pos: null
  }

  componentDidUpdate(prevProps) {
    if (this.props.item.resizable !== prevProps.item.resizable && this.props.item.resizable) {
      window.addEventListener('mouseup', document.removeEventListener('mousemove', this.doDrag))
    }
  }

  starDrag = (type) => {
    this.setState({
      pos: type
    })

    document.addEventListener('mousemove', this.doDrag)
    this.props.startDrag()
  }

  doDrag = (e) => {
    const { pos } = this.state
    const { item, doDrag } = this.props
    doDrag(item, pos, e);
  }

  render() {
    const { item, posImg } = this.props

    return (
      <div className="handler">
        {
          item.resizable ? (
            <>
              <div className="select-areas-resize-handler w"
                style={{
                  cursor: 'w-resize',
                  left: (item.x + posImg.left - 6) + 'px',
                  top: (item.y + posImg.top + item.height / 2 - 4) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('w') }}
              />
              <div
                className="select-areas-resize-handler sw"
                style={{
                  cursor: 'sw-resize',
                  left: (item.x + posImg.left - 4) + 'px',
                  top: (item.y + posImg.top + item.height - 6) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('sw') }}
              />
              <div
                className="select-areas-resize-handler s"
                style={{
                  cursor: 's-resize',
                  left: (item.x + posImg.left + item.width / 2 - 4) + 'px',
                  top: (item.y + posImg.top + item.height - 6) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('s') }}
              />
              <div
                className="select-areas-resize-handler se"
                style={{
                  cursor: 'se-resize',
                  left: (item.x + posImg.left + item.width - 6) + 'px',
                  top: (item.y + posImg.top + item.height - 6) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('se') }}
              />
              <div
                className="select-areas-resize-handler e"
                style={{
                  cursor: 'e-resize',
                  left: (item.x + posImg.left + item.width - 6) + 'px',
                  top: (item.y + posImg.top + item.height / 2 - 6) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('e') }}
              />
              <div
                className="select-areas-resize-handler ne"
                style={{
                  cursor: 'ne-resize',
                  left: (item.x + posImg.left + item.width - 6) + 'px',
                  top: (item.y + posImg.top - 4) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('ne') }}
              />
              <div
                className="select-areas-resize-handler n"
                style={{
                  cursor: 'n-resize',
                  left: (item.x + posImg.left + item.width / 2 - 4) + 'px',
                  top: (item.y + posImg.top - 4) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('n') }}
              />
              <div
                className="select-areas-resize-handler nw"
                style={{
                  cursor: 'nw-resize',
                  left: (item.x + posImg.left - 4) + 'px',
                  top: (item.y + posImg.top - 4) + 'px',
                  zIndex: item.z + 10
                }}
                onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); this.starDrag('nw') }}
              />
            </>
          ) : null
        }
      </div>
    );
  }
}

Resizable.defaultProps = {
  item: {
    id: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    z: 0,
    resizable: false
  },
  posImg: null
}

export default Resizable;

