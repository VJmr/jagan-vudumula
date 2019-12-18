import React, {Component} from 'react';
import Scrollspy from 'react-scrollspy'

class Header extends Component {

    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.myHeader = React.createRef()
        this.state = {
            headerClass : "jv__header",
            headerItems : ['Home', 'About', 'Skills', 'Experiences', 'Projects', 'Contact']
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let lastScrollY = window.scrollY;
        if(lastScrollY > (this.myHeader.current.offsetHeight - 20)) {
            this.setState({headerClass: "jv__header jv__header-fixed"});
        } else {
            this.setState({headerClass: "jv__header"});
        }
    }

    render() {
        return(
            <header className={this.state.headerClass} ref={this.myHeader}>
                <nav className="container">
                    <Scrollspy items={['home', 'about', 'skills', 'experiences', 'projects', 'contact']} className="nav" currentClassName="is__current">
                        {
                            this.state.headerItems.map((menuitem, index) => {
                                let ref = '#' + menuitem.toLowerCase();
                                let className = 'nav-link' + (menuitem.isActive ? ' active' : '');
                                return (
                                    <li className="nav-item" key={index}>
                                        <a className={className} href={ref}>{menuitem}</a>
                                    </li>
                                )
                            })
                        }
                    </Scrollspy>
                </nav>
            </header>
        )
    }
}

export default Header;