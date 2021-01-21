function BasicInfo(props) {
    return(
        <div>
            <p>name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>DOB:{props.DOB}</p>
        </div>
    );
}

export default BasicInfo;