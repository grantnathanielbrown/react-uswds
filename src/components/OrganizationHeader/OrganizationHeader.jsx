import React from 'react';
import { Search, Logo } from '@trussworks/react-uswds';
import GSLogo from '../../assets/GSLogo.svg';
export default function OrganizationHeader() {
    return (
        <div id="organizationHeader">
            <Logo image={
                    <img src={GSLogo} alt="Grant Solutions logo" />
                }
            />
            <Search placeholder="Search" size="small"></Search>
        </div>
    )
}
