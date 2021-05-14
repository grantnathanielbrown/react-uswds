import React from 'react';
import { NavList } from '@trussworks/react-uswds';

export default function OrganizationNavbar() {
    const navLinks = ["Dashboard", "Active Grant", "Payment", "Audit", "PI/PD Contacts", "Nonprofit", "Organization Info"]
    const navLinkElements = navLinks.map((linktext) => {
        return (
            <a href="/">{linktext}</a>
        )
    })
    return (
        <NavList items={navLinkElements} type="primary" mobileExpanded={true} />
    )
}
