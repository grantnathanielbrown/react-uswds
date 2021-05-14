import React from 'react';
import { Card, CardHeader, CardBody, CardMedia } from '@trussworks/react-uswds';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
export default function ComplianceCard(props) {
    return (
        <Card>
            
            <CardMedia>
                <FontAwesomeIcon icon={props.compliant ? faCheckCircle : faTimesCircle} color={props.compliant ? "green": "red"}  />
            </CardMedia>   
            <CardHeader>
                {props.header}
            </CardHeader>
            <CardBody>
                Source: SAM.gov
                Last Update: 08/31/2020
            </CardBody>
        </Card>
    )
}
