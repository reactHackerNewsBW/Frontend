import React from "react"

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const ListItem = props => {
	const {id, title, url} = props.single;

	clg(title);

	return (
		<div>
			<p id={id} url={url}>{title}</p> 
		</div>
	)
}

export default ListItem