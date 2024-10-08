import Svg, {Circle, Ellipse, G, Path, Polygon} from 'react-native-svg';
import {IconProps} from '.';
const CoffeeBagIcon = (props: IconProps) => {
  const {width = 64, height = 64} = props;
  return (
    <>
      <Svg
        width={width}
        height={height}
        viewBox='0 0 64 64'
        // @ts-ignore
        enableBackground='new 0 0 64 64'
        id='Layer_1'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        fill='#000000'>
        <G id='SVGRepo_bgCarrier' strokeWidth={0} />
        <G id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
        <G id='SVGRepo_iconCarrier'>
          <G>
            <G>
              <Circle cx={32} cy={32} fill='#ED80A7' r={30} />
            </G>
            <G>
              <G>
                <Polygon fill='#D8D8D7' points='47.2,52.6 20.3,52.6 23.1,10.7 43.5,10.7 ' />
              </G>
              <G>
                <Polygon fill='#BFBEBE' points='20.3,52.6 16.2,50 21.4,15.6 21.8,10.7 23.1,10.7 ' />
              </G>
              <G>
                <Polygon fill='#A0A09F' points='23.1,10.7 22.7,15.8 44,15.8 43.5,10.7 ' />
              </G>
              <G>
                <Polygon fill='#A2A2A3' points='16.2,50 19,49.2 20.3,52.6 ' />
              </G>
              <G>
                <Polygon fill='#54321F' points='22.2,24.2 21.1,40.3 46.1,40.3 44.7,24.2 ' />
              </G>
              <G>
                <Ellipse
                  cx={33.8}
                  cy={32.1}
                  fill='#A88771'
                  rx={2.5}
                  ry={4.1}
                  transform='matrix(1.022796e-02 -0.9999 0.9999 1.022796e-02 1.3976 65.521)'
                />
              </G>
              <G>
                <Path
                  d='M37.9,32.1c0,0-6.2-1.4-8.2-0.1c0,0,1.4-0.1,3.1,0.4C34.5,32.9,37.4,33.2,37.9,32.1z'
                  fill='#54321F'
                />
              </G>
              <G opacity={0.25}>
                <Polygon fill='#E8E7E7' points='22.7,15.8 47.2,52.6 44,15.8 ' />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    </>
  );
};
export default CoffeeBagIcon;
