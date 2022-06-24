import React from 'react'

export default function Footer() {
  return (
    <footer>    
        <div className="container" style={{padding: "5px 0", textAlign:"center"}}>
            <a href="https://www.facebook.com/">
                <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x icon"></i>
            </a>
            <a href="https://twitter.com/shoaib_shah15">
                    <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x icon"></i>
                </a>
                <a href="https://www.google.com/account/about/">
                        <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x icon"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/syed-muhammad-shoaib-71028b224/">
                            <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x icon"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                                <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x icon"></i>
                            </a>
                            <a href="https://github.com/Shah-1510">
                                    <i className="fa fa-github fa-lg white-text icon"></i>
                                </a>
        </div>
        <div style={{background: "#000"}}>
            <p style={{color: "#91BEC2", padding: "15px 0", textAlign:"center"}}>
                &copy; 2022 Copyright: <a href="mailto:webcodian@gmail.com">Created By: SYED M SHOAIB</a>
            </p>
        </div>
    </footer>
  )
}
