import React from 'react';

class ContentArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement("div", null, "stuff");
    }
}
class ContentAreaConfig extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return 'stuff';
    }
}

class DisplayRenderer extends React.Component {
    constructor() {
        super(...arguments);
        this.renderLayout = (layout, mixin) => {
            const { customComponents } = this.props;
            switch (layout.type) {
                case 'content-area':
                    return this.renderComponent(ContentArea, layout);
                case 'custom':
                    const CustomComponent = customComponents[layout.customComponent];
                    return this.renderComponent(CustomComponent, layout.props);
                default:
                    const never = layout ||
                        new Error(`Unrecognized layout type ${layout.type}`);
                    throw never;
            }
        };
    }
    renderComponent(Component, layout, mixin = {}) {
        const C = Component;
        return React.createElement(C, Object.assign({}, layout, mixin, { renderLayout: this.renderLayout }));
    }
    render() {
        const { layout } = this.props;
        return this.renderLayout(layout);
    }
}

// export { EditingRenderer } from './EditingRenderer'

export { DisplayRenderer };
