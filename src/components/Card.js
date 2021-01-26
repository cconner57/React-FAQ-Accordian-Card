import React from 'react';
import AccordianItem from './AccordianItem';
import styled from 'styled-components';
import { text } from '../Styles';

import Box from '../images/illustration-box-desktop.svg';
import Women from '../images/illustration-woman-online-desktop.svg';
import Pattern from '../images/bg-pattern-desktop.svg';

const Card = () => {
	return (
		<Container>
			<div className='images'>
				<div className='pattern'></div>
				<div className='woman'></div>
				<div className='box'></div>
			</div>
			<div className='accordian'>
				<h1>FAQ</h1>
				<AccordianItem
					title='How many team members can I invite?'
					content='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
				/>
				<AccordianItem
					title='What is the maximum file upload size?'
					content='No more than 2GB. All files in your account must fit your allotted storage space.'
				/>
				<AccordianItem
					title='How do I reset my password?'
					content='Click “Forgot password” from the login page or “Change password” from your profile page.
                    A reset link will be emailed to you.'
				/>
				<AccordianItem
					title='Can I cancel my subscription?'
					content='Yes! Send us a message and we’ll process your request no questions asked.'
				/>
				<AccordianItem
					title='Do you provide additional support?'
					content='Chat and email support is available 24/7. Phone lines are open during normal business hours.'
				/>
			</div>
		</Container>
	);
};

export default Card;

const Container = styled.div`
	height: 60vh;
	width: 65vw;
	display: flex;
	border-radius: 25px;
	background-color: hsl(0, 0%, 100%);
	box-shadow: 0 8px 20px 10px rgba(31, 38, 135, 0.37);
	.images {
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
		z-index: 1;
		.pattern {
			position: absolute;
			content: '';
			top: -300px;
			left: -575px;
			height: 100vh;
			width: 100vw;
			background: url(${Pattern}) no-repeat;
			z-index: 5;
		}
		.woman {
			position: absolute;
			top: 60px;
			left: -80px;
			height: 100vh;
			width: 100vw;
			background: url(${Women}) no-repeat;
			z-index: 7;
		}
		.box {
			position: fixed;
			top: 355px;
			left: 160px;
			height: 15%;
			width: 10%;
			background: url(${Box}) no-repeat;
            z-index: 10;
		}
	}
	.accordian {
		display: flex;
		flex-direction: column;
		padding: 40px 40px 0 40px;
		width: 100%;
		height: 100%;
        overflow: hidden;
		h1 {
			font-weight: ${text.bold};
			margin-bottom: 20px;
		}
	}
`;
