plan:
    - make hardcoded location endpoint
        - with test
    - make endpoint dynamic(hit actual api)
        - write munge function & test 
        - update tests with real data


once tests are passing run: 
(acp to github)
heroku create
npm run setup:heroku
git push heroku main:master
    go to heroku dashboard and add keys to Config Vars for site
    then put deployed site's url in the input on the frontend

reviews
    figure out the munge
    send bearer thing through?
    in app.js under const data= will need to 
        .set('Authorization', `Bearer ${REVIEWS_KEY}`)



