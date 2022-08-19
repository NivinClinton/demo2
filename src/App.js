import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='demo bg-success'>
      <div>
        <h1 style={{ color: "White" }}>
          This is sample demo page
        </h1>
      </div>
      <div className="sampleDiv ">
        <h3 style={{ backgroundColor: "pink" }}>Virat Kholi</h3>
        <img src="https://static.toiimg.com/thumb/msid-93646127,imgsize-42882,width-400,resizemode-4/93646127.jpg" alt="" />
        <p style={{ color: "green" }} >
          Virat Kohli (Hindi: [ʋɪˈɾɑːʈ ˈkoːɦliː] (listen); born 5 November[3] 1988) is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman. He is often considered one of the best batsmen of his era and is widely regarded as one of the greatest all-format batsman of all time[4] Between 2013 and 2022, he captained the India cricket team in 213 matches across all three formats. With 40 wins out of 68 matches, Kohli is one of the most successful Indian Test captains.[5][6]

          Kohli made his Test debut in 2011.[7] He reached the number one spot in the ICC rankings for ODI batsmen for the first time in 2013.[8] He has won Man of the Tournament twice at the ICC World Twenty20 (in 2014 and 2016). He also holds the world record of being the fastest to 23,000 international runs.[9]
        </p>
      </div>
    </div>
  );
}

export default App;
