import React, { Component } from 'react';
import M from 'materialize-css';
import {Overview} from '~common-components/overview/Overview.jsx';
import {Leadership} from '~common-components/leadership/Leadership.jsx';
import homeBackgroundTop from  '~data/images/home-background-top.jpg';
import homeBackgroundBottom from '~data/images/home-background-bottom.jpg';
import DATA from '~data/data.json';


export class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            introduction: '',
            leaders: []
        }
    }

    componentDidMount() {
        this.setState({
            leaders: DATA.leadership.leaders,
            title: DATA.leadership.title,
            introduction: DATA.leadership.introduction
        });

        var elems = document.querySelectorAll('.parallax');
        this.parallaxInstance = M.Parallax.init(elems, {});
    }

    componentWillUnmount() {
        this.parallaxInstance && this.parallaxInstance[0].destroy();
    }

    render() {
        return (
            <div className="home-page-container">
                <div className="parallax-container">
                    <div className="parallax">
                        <img src={homeBackgroundTop} alt="nature"></img>
                    </div>
                </div>
                <div className="container">
                    <Overview/>
                    <Leadership {...this.state}/>
                </div>
                <div className="parallax-container">
                    <div className="parallax">
                        <img src={homeBackgroundBottom} alt="nature"></img>
                    </div>
                </div>
            </div>
        );
    }
}

