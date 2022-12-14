import React from 'react'
import './About.css'


const About = () => {
    return (
        <div className='about' >
            <div className='container'>

                <img src='https://www.adp.com/-/media/adp/resourcehub/rh2/images/faq/img/co-employment-616x308.jpg?rev=410cd764c61b4694b3784f63cfe982ab&hash=660340AD356258150721A397B0BE29CE' alt='john' width={500} height={450} />

                <div className='col-2'>
                    <h2 className='header-about'>About Us</h2>
                    <span className='line'></span>
                    <h4 className='header-did'><b><u>Did you know?</u></b></h4>
                    <p>Over 689 million people live below the poverty line, on less than $1.90 per day.
                        There are many challenges that the poor face such as lack of education, employment, income and productive resources.<br/><br/>
                        Our aim is to help reduce poverty by increasing employment generation and promoting social integration for the poor.<br/><br/>
                        We do this by providing a platform where  the youth/ needy/ poor can find jobs and generate money,
                        obtain scholarships from donors and raise funds for food and healthcare services.
                    </p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About


// # This workflow will install a prebuilt Ruby version, install dependencies, and
// # run tests .
    
//  on:
//     pull_request:
//       branches:
//         - '*'
//     push:
//       branches:
//       - main

// jobs:
//   Test:
//    matrix:
//        # Due to https://github.com/actions/runner/issues/849, we have to use quotes for '3.0'
//         ruby: ['2.7.x', '3.0.x', '3.1.x']
//     runs-on: ubuntu-latest
//     services:
//       postgres:
//         image: postgres:12
//         env:
//           POSTGRES_USER: postgres
//           POSTGRES_PASSWORD: password
//         ports: ['5432:5432']
//         options: >-
//           --health-cmd pg_isready
//           --health-interval 10s
//           --health-timeout 5s
//           --health-retries 5

//     steps:
//       - uses: actions/checkout@main

//       - name: Setup Ruby
//         uses: ruby/setup-ruby@v1
//         with:
//           ruby-version: ${{ matrix.ruby }}

//       - name: Setup Node 14
//         uses: actions/setup-node@v1
//         with:
//           node-version: 14.x

//       - name: Get yarn cache
//         id: yarn-cache
//         run: echo "::set-output name=dir::$(yarn cache dir)"

//       - name: Cache yarn
//         uses: actions/cache@v1
//         with:
//           path: ${{ steps.yarn-cache.outputs.dir }}
//           key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
//           restore-keys: |
//             ${{ runner.os }}-yarn-
//       - name: Cache gems
//         uses: actions/cache@v1
//         with:
//           path: vendor/bundle
//           key: ${{ runner.os }}-gem-${{ hashFiles('**/Gemfile.lock') }}
//           restore-keys: |
//             ${{ runner.os }}-gem-
//       - name: Install dependencies
//         run: |
//           gem install bundler
//           bundle config path vendor/bundle
//           bundle install --jobs 4 --retry 3
//           yarn install --frozen-lockfile
//       - name: Run tests
//         env:
//           DATABASE_URL: postgres://postgres:password@localhost:5432/test
//           RAILS_ENV: test
//           RAILS_MASTER_KEY: ${{ secrets.RAILS_MASTER_KEY }}
//           PG_USER: postgres
//         run: |
//           bin/rails db:test:prepare
//           bin/rails test        
          
//   Deploy:
//     if: ${{ github.event_name == 'push' && github.ref == 'refs/heads/master' }}
//     needs: Test
//     runs-on: ubuntu-latest

//     steps:
//       - uses: actions/checkout@master
//       - name: Deploy To Heroku
//         uses: akhileshns/heroku-deploy@v3.6.8 # This is the action
//         with:
//           heroku_api_key: ${{secrets.HEROKU_API_KEY}}
//           heroku_app_name: "poverty-line-api" #Must be unique in Heroku
//           heroku_email: "bonochieng@gmail.com"
