import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardUser = ({ userData }) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={userData.avatar_url} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{userData.login}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>{userData.bio}
                    </CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardUser;