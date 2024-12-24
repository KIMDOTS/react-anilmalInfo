import { useSearchParams } from 'react-router-dom';
import { data } from "../assets/data/data";
import { getRegExp } from 'korean-regexp';
import { Link } from 'react-router-dom';

function Search(){
    const [searchParams] = useSearchParams();
    const param = (searchParams.get('animal'))
    const reg = getRegExp(param);
    
    // 이름과 정규식 이름이 일치한지 검사
    const filteredData = data.filter(el => el.name.match(reg));

    return(
        <ul>
        {filteredData.map((el) => (
            <li key={el.id}>
                <Link to={`/detail/${el.id}`}>
                    <img src={el.img}/>
                    <div>{el.name}</div>
                </Link>
            </li>
        ))}
    </ul>
    );
}

export default Search;