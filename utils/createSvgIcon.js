import * as React from 'react';
import SvgIcon from '../components/SvgIcon';

export default function createSvgIcon(path, displayName) {
    const Component = (props, ref) => {
        return (
            <SvgIcon data-testId={`${displayName}Icon`} ref={ref} {...props}>
                {path}
            </SvgIcon>
        );
    };

    if (process.env.NODE_ENV !== 'production') {
        // Need to set `displayName` on the inner component for React.memo.
        // React prior to 16.14 ignores `displayName` on the wrapper.
        Component.displayName = `${displayName}Icon`;
    }

    return React.memo(React.forwardRef(Component));
}
