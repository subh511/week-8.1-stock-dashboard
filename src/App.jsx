// import Flex from "./tailwindsData/Flex";
// import Grid from "./tailwindsData/Grid";
// import Media from "./tailwindsData/Media"
// <Flex/>
// <br/>
// <br/>
// <Grid/>
// <br/>
// <br/>
// <Media/>

import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-4">
      <RevenueCard titel={"Amount Pending"} amount={"96,312"} orderCount={13} />
    </div>
  );
}

export default App;
