import {Button} from 'react-bootstrap';

export const FullPost = ({id}) => {
    return (
        <div className="full-post">
            <h1>Статья {id}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                aliquid libero et temporibus ex, dicta commodi repellendus magni
                culpa, neque at totam mollitia dolor, corrupti suscipit
                pariatur. Enim, placeat eius.
            </p>
            <Button>Назад</Button>
        </div>
    );
};
