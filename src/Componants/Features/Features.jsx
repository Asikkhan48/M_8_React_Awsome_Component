import PropTypes from "prop-types"
import { AiFillCaretRight } from "react-icons/ai";

const Features = ({feature}) => {
    return (
        <div>
            <p className="flex items-center">< AiFillCaretRight className=""></AiFillCaretRight>  {feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string
}
export default Features;