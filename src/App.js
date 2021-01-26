import Card from './components/Card';

import GlobalStyle from './GlobalStyles';
import { gradient } from './Styles';
import styled from 'styled-components';

function App() {
	return (
		<Background>
			<GlobalStyle />
			<Card />
		</Background>
	);
}

export default App;

const Background = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(${gradient.violet}, ${gradient.blue});
`;
