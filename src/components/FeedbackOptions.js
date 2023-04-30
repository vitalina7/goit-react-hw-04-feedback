import PropTypes from 'prop-types';
import {Div,Button} from "./FeedbackOptions.styled"
export const FeedbackOptions=({ options, onLeaveFeedback }) => {
    return (
        <Div>
            {options.map((name, index) => {
                return (
                    <Button key={index + 1} onClick={()=>onLeaveFeedback(name)}>
                        {name}
                    </Button>
                )
            }
            )
        }
        </Div>
    )
}
 
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}