import React from 'react';

const Form = () => {

    const handlesubmit = event => {
        event.preventDefault()
        const form = event.target;
        const websiteTitle = form.websiteTitle.value
        const domain = form.domain.value;
        const database = form.database.value;
        const Security = form.security.value;
        const apiList = form.apiList.value;
        const host = form.host.value;
        const technology = form.technology.value
        const reactHook = form.reactHook.value;
        const library = form.library.value;
        const about = form.about.value;

        const nodejs = form.nodejs.value;
        const frontendLibrary = form.frontendLibrary.value;
        const backendLibrary = form.backendLibrary.value;
        const frontendFramework = form.frontendFramework.value;
        const backendFramework = form.backendFramework.value;
        const Framework = form.Framework.value;
        const thumbImage = form.thumbImage.value;
        const coverImage = form.coverImage.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const language = form.language.value;

        console.log(websiteTitle, domain, database, Security, apiList, host, technology, reactHook, library, about, nodejs, frontendLibrary, backendLibrary, frontendFramework, backendFramework, Framework, thumbImage, coverImage, shortDescription, longDescription, language)
        const porthfolioInfo = {
            websiteTitle,
            domain,
            database,
            Security,
            apiList,
            host,
            technology,
            reactHook,
            library,
            about,
            nodejs,
            frontendLibrary,
            backendLibrary,
            frontendFramework,
            backendFramework,
            Framework,
            thumbImage,
            coverImage,
            shortDescription,
            longDescription,
            language

        }
        console.log(porthfolioInfo)


        fetch('https://portfolio-server-site-zeta.vercel.app/ProjectData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(porthfolioInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('sussessfuilly submitted')
                }

            })



    }
    return (
        <section>


            <form onSubmit={handlesubmit} className='grid grid-cols-2 gap-5 w-10/12 mx-auto mt-20 mb-10'>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Website Title</span>
                        </label>
                        <input name='websiteTitle' type="text" placeholder="Website Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Domain</span>
                        </label>
                        <input name='domain' type="text" placeholder="Domain" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Database</span>
                        </label>
                        <input name='database' type="text" placeholder="Database" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Security</span>
                        </label>
                        <input name='security' type="text" placeholder="Security" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">API List</span>
                        </label>
                        <input name='apiList' type="text" placeholder="Api List" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Host</span>
                        </label>
                        <input name='host' type="text" placeholder="Host" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Technology</span>
                        </label>
                        <input name='technology' type="text" placeholder="Technology" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">React Hook</span>
                        </label>
                        <input name='reactHook' type="text" placeholder="React Hook" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Library</span>
                        </label>
                        <input name='library' type="text" placeholder="Library" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">About</span>
                        </label>
                        <input name='about' type="text" placeholder="About" className="input input-bordered" />
                    </div>

                </div>





                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Node Js</span>
                        </label>
                        <input name='nodejs' type="text" placeholder="Node js" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">FrontEnd Library </span>
                        </label>
                        <input name='frontendLibrary' type="text" placeholder="FrontEnd Library" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">BackEnd Library</span>
                        </label>
                        <input name='backendLibrary' type="text" placeholder="BackEnd-Library" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">FrondEnd Framework</span>
                        </label>
                        <input name='frontendFramework' type="text" placeholder="FrondENd Framework" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">BackEnd Framework</span>
                        </label>
                        <input name='backendFramework' type="text" placeholder="FrondENd Framework" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Framework</span>
                        </label>
                        <input name='Framework' type="text" placeholder="FrondENd Framework" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Thumb Image</span>
                        </label>
                        <input name='thumbImage' type="file" placeholder="Thumb image" className="input input-bordered pt-2" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Cover image</span>
                        </label>
                        <input name='coverImage' type="file" placeholder="Cover Image" className="input input-bordered pt-2" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input name='shortDescription' type="text" placeholder="Short Descripition" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Long Descripition</span>
                        </label>
                        <input name='longDescription' type="text" placeholder="Long Descripition" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Language</span>
                        </label>
                        <input name='language' type="text" placeholder="Language" className="input input-bordered" />
                    </div>
                </div>
                <button className="btn btn-secondary">Button</button>
            </form>

        </section>
    );
};

export default Form;