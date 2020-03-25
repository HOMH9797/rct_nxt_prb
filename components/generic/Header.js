import Head from "next/head"

export default () => (

    <div>
        <Head>
            <title>NextJS & ReactJS</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </Head>
        <style jsx global>
            {`
            body{
                background:#a5d6a7
            }
            `}
        </style>
    </div>
)