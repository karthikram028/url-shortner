
import URLShortenerForm from '../components/URLShortenerForm';
import Background from '../components/Background';
import {Box} from "@chakra-ui/react"

function Home() {
    return (
<Box
height="100%"
display="flex"
alignItems="center"
justifyContent="center">
<URLShortenerForm></URLShortenerForm>
<Background></Background>
</Box>);
}

export default Home
