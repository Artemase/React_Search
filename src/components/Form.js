import React from "react";


const Form = () =>{
    const[comment, setComment] = useState('');

    function onChange(e){
        setComment(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        localStorage.setItem('comment', comment);
    }
    return(
        <form onSubmit={onSubmit}>
            <Comment  
            type="text"
            placeholder={'Комментарий к проекту'}
            value={comment}
            onChange={(change) => onChange}/>
            <Button onClick={onSubmit}>
                <Pencil src={pencil}>
                </Pencil>
            </Button>
        </form>
    )
}

const Comment = styled.input`
  height: 54px;
  flex: 90%;
  padding: 10px 20px;
  border: solid 1px #A2A3A4;
  &:focus {
    border-color: #A2A3A4;
    transition: 0.5s;
  }
  &::placeholder{
    color: #000000
  }
`

const Pencil = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 6px 11px 8px 12px;
`

const Button = styled.button`
  padding: 0;
  border: solid 1px #00A3FF;
  color: white;
  outline: none;
  cursor: pointer;
  background: #00A3FF 100%;
`

export default Form;