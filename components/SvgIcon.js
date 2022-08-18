/* eslint-disable react/require-default-props */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const SvgIcon = React.forwardRef((props, ref) => {
    const {
        children,
        className,
        color,
        fontSize = '24px', // TODO: small, medium, large, etc.
        viewBox = '0 0 24 24',
        ...other
    } = props;

    return (
        <svg
            className={cx(className)}
            focusable="false"
            viewBox={viewBox}
            color={color}
            ref={ref}
            style={{
                fontSize,
                transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                flexShrink: 0,
                userSelect: 'none',
                width: fontSize, // change from 1em to solve safari zoom
                height: fontSize, // change from 1em to solve safari zoom
                display: 'inline-block',
                fill: 'currentColor',
                stroke: 'currentColor'
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...other}
        >
            {children}
        </svg>
    );
});

SvgIcon.propTypes /* remove-proptypes */ = {
    /**
     * Node passed into the SVG element.
     */
    children: PropTypes.node,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
     * @default 'inherit'
     */
    color: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * The fontSize applied to the icon. Defaults to 18px, but can be configure to inherit font size.
     * @default '18px'
     */
    fontSize: PropTypes.oneOfType([
        // PropTypes.oneOf(['inherit', 'large', 'medium', 'small']),
        PropTypes.string
    ]),
    /**
     * Applies a color attribute to the SVG element.
     */
    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element.
     * For example, if the SVG element is 500 (width) by 200 (height),
     * and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the SVG will go from the top left corner (0,0)
     * to bottom right (50,20) and each unit will be worth 10px.
     * @default '0 0 24 24'
     */
    viewBox: PropTypes.string
};

export default SvgIcon;
