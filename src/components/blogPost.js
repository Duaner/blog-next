import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

import styles from "../app/page.module.css"


const Blogpost = (data) => {
    console.log("PageInComponent", data);
    const page = data.page;
    const textColor = page.data.fontcolor ? page.data.fontcolor : ''

    return(
        <main className={styles.LayoutContainer} style={{color: textColor}}>
            <div id="bg-color" className={styles.bgColor} style={{background : page.data.background_color}}></div>
            <div id="blog-main"  className={styles.blogmain}>
                <SliceZone slices={page.data.body} components={components} context={{"date":page.first_publication_date, "secondary_color":page.data.secondary_color}} />;
            </div>
        </main>
    )
}

export default Blogpost;