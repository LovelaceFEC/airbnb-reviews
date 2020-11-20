/* eslint-disable react/prop-types */
import React  from 'react';
import Truncate from 'react-truncate';
import styles from './reviews.module.css';

class Comments extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      expanded: false,
      truncated: false
    };
    this.handleTruncate = this.handleTruncate.bind(this);
    this.readMore = this.readMore.bind(this);
  }

  handleTruncate(truncated) {
    if (this.state.truncated !== truncated) {
      this.setState({
          truncated
      });
    }
  }

  readMore(event) {
    event.preventDefault();

    this.setState({
      expanded: true
    });
  }

  render() {
    let { children, more, lines } = this.props;
    let { expanded } = this.state;

    return (
      <div>
        <Truncate
          lines={!expanded && lines}
          ellipsis={(
            <span>... <a className={styles.reviewReadMore} href='#' onClick={this.readMore}>{more}</a></span>
          )}
          onTruncate={this.handleTruncate}
        >
          {children}
        </Truncate>
      </div>
    );
  }
}

Comments.defaultProps = {
  lines: 4,
  more: 'read more'
}

export default Comments;