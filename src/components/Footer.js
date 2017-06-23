import React from 'react';

import FooterLink from './FooterLink';

const Footer = (props) => {
    return (
        <div>
            <FooterLink filter="SHOW_ALL" text="ALL" />
            {' '}
            <FooterLink filter="SHOW_ACTIVE" text="Active" />
            {' '}
            <FooterLink filter="SHOW_COMPLETED" text="Completed" />
        </div>
    );
};

export default Footer;