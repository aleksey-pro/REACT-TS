import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

type RouteParams = {
  id: string,
}

interface IPost {
  title?: string,
  body?: string,
}

type PostState = {
  post: IPost,
}

// ответ сервера может быть любым -> any
// export async function http(request: string): Promise<any> {

// чтобы избавиться от any - 
export async function http<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const body = response.json();
  return body;
}
// мы типизируем весь body. для типизации всего ответа



// берет пропсы из роутера, RouteParams задаются самим пользователем в виде опций, поэтому их тоже 
// типизируем, создав RouteParams - тогда match.params.id резолвится
class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
  state = {
    post: {
      title: '',
      body: '',
    },
  }

  async componentDidMount() {
    const id = this.props.match.params.id || '';
    const post = await http<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    this.setState({ post });
  }

  render() {
    const { post } = this.state;
    // берем title, body у пустого обекта из state, для этого надо описать тип поста - PostState
    const { title, body } = post;

    return (
      <section>
        <h1>Post</h1>
        <article>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      </section>
    );
  }
};

export default Post;