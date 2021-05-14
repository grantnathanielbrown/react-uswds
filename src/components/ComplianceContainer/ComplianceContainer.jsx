import React from 'react';
import { GridContainer } from '@trussworks/react-uswds';
import ComplianceCard from '../ComplianceCard/ComplianceCard';
export default function ComplianceContainer() {
    return (
        <GridContainer containerSize="card">
            <ComplianceCard compliant={true} header="SAM.GOV" ></ComplianceCard>
            <ComplianceCard compliant={true} header="FEDERAL DEBT" ></ComplianceCard>
            <ComplianceCard compliant={false} header="EXCLUDED PARTIES" ></ComplianceCard>
        </GridContainer>
    )
}
