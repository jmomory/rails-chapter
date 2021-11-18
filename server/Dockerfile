FROM ruby:2.7.4

RUN bundle config --global frozen 1

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install
RUN rails db:create
RUN rails db:migrate 

COPY . .

CMD ["bin/rails", "server", "-b", "0.0.0.0"]
