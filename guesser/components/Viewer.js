import {Viewer, ViewerOptions} from "mapillary-js";
import React from "react";

class ViewerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        this.viewer = new Viewer({
        apiClient: "NXVGMWlCc2ozUmQ5a05DQzdiR1lKVTowZTcyMWU5ZTBlMzQzOGE2",
        container: this.containerRef.current,
        imageId: this.props.imageId,
        });
    }

    componentWillUnmount() {
        if (this.viewer) {
        this.viewer.remove();
        }
    }

    render() {
        return <div ref={this.containerRef} style={this.props.style} />;
    }
}

export default ViewerComponent;