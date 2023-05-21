import React from 'react';

const ProgressBar = () => {
    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0]
        tooltip.innertext=percentage + '%';
        bar.style.width=percentage + '%'
    })  
    return (
        <div>
            <div class="right">
                <div class="skills_wrapper">
                    <div class="skills_box">
                        <h4>Html5 & Css3</h4>
                        <div class="progress_wrap">
                            <span data-percent="90" class="progress_bar">
                                <span class="tooltip">90%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skills_box">
                        <h4>Bootstrap & Tailwind & Material UI</h4>
                        <div class="progress_wrap">
                            <span data-percent="90" class="progress_bar">
                                <span class="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skills_box">
                        <h4>JAVASCRIPT</h4>
                        <div class="progress_wrap">
                            <span data-percent="60" class="progress_bar">
                                <span class="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skills_box">
                        <h4>React</h4>
                        <div class="progress_wrap">
                            <span data-percent="75" class="progress_bar">
                                <span class="tooltip">75%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skills_box">
                        <h4>Redux</h4>
                        <div class="progress_wrap">
                            <span data-percent="50" class="progress_bar">
                                <span class="tooltip">50%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skills_box">
                        <h4>Node js, Express js,Mongodb</h4>
                        <div class="progress_wrap">
                            <span data-percent="50" class="progress_bar">
                                <span class="tooltip text-white">50%</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProgressBar;