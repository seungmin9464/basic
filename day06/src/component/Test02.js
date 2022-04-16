import { BiAlarmAdd, BiBellOff} from "react-icons/bi";
import Numeral from "numeral";
import moment from 'moment'

const Test02 = () => {
    return (
        <div>
            <p><BiAlarmAdd /></p>
            <p><BiBellOff /></p>
            <h2>{Numeral(25000).format(0,0)}</h2>
            <h2>{Numeral(452000).format(0,0)}</h2>
            <h2>{moment('20220305').format('YYYY.MM.DD')}</h2>
        </div>
    );
};

export default Test02;