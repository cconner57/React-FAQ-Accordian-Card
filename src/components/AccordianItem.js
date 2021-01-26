import React, { useState } from 'react';
import styled from 'styled-components';
import { text, divider } from '../Styles';

import Arrow from '../images/icon-arrow-down.svg';

const AccordianItem = ({ title, content }) => {
	const [active, setActive] = useState(false);
	return (
		<Container isActive={active} onClick={() => setActive(!active)}>
			<h4>{title}</h4>
			<div className='down-arrow'></div>
			<p>{content}</p>
		</Container>
	);
};

export default AccordianItem;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	height: ${(props) => (props.isActive ? '80px' : '40px')};
	overflow: hidden;
	border-bottom: 1px solid ${divider.gray};
	transition: height 0.5s ease;
	cursor: pointer;
	margin-bottom: 10px;
	h4 {
		display: flex;
		align-items: center;
		color: ${(props) =>
			props.isActive ? `${text.blue}` : `${text.lightGray}`};
		font-weight: ${(props) => props.isActive && `${text.bold}`};
		flex: 1 70%;
		height: 30px;
		margin-bottom: 10px;
	}
	.down-arrow {
		flex: 1;
		height: 25px;
		width: 25px;
		margin-left: 40px;
		transition: transform 0.5s ease;
		background: url(${Arrow}) center no-repeat;
		transform: ${(props) => props.isActive && 'rotate(180deg)'};
	}
	p {
		flex: 1 100%;
		color: ${text.lightGray};
		font-size: ${text.size};
		padding-bottom: 15px;
	}
`;
