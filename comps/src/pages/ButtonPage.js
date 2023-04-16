import Button from '../components/Button';
import {
  GoBell,
  GoCloudDownload,
  GoFlame,
  GoFileSubmodule,
  GoPulse,
} from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <div>
      <div>
        <Button success outline rounded onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoFlame />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoFileSubmodule />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoPulse />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
