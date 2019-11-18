import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="md:w-2/3 md:mr-8">
                <div className="container max-w-md mx-auto mt-10">
                    <div className="rounded overflow-hidden shadow-lg">
                        <img
                            className="w-full"
                            src={props.src}
                            alt={props.title}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    props: PropTypes.node.isRequired
};

export default Card;