import Layout from '../components/Layout';
import { Component } from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';

const StyledParagraph = styled.picture`
  width: 80vw;
`;
class Post extends Component {
  render() {
    const { router } = this.props;
    console.log(router);
    return (
      <Layout title={router.query.title}>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui
          velit, vestibulum nec auctor vel, eleifend facilisis turpis. Curabitur
          ut risus nulla. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Etiam mattis turpis vitae dignissim
          molestie. Nam et consectetur velit, a convallis ipsum. Maecenas mi
          urna, consectetur a arcu eu, posuere aliquam sem. Donec eleifend justo
          id sem convallis eleifend. Suspendisse iaculis vel nisl eget accumsan.
          Etiam dictum mattis placerat. Curabitur et dolor vulputate, efficitur
          ipsum vitae, posuere enim. Morbi pretium porta lorem, blandit viverra
          est lacinia gravida. Curabitur consectetur nulla eu orci commodo, a
          tincidunt augue dictum. Nunc iaculis imperdiet dolor, ac ultricies
          mauris interdum ac. Nullam eu nulla mi. Pellentesque a lacus elit.
          Donec eget rutrum leo, ut convallis leo. Nulla pretium magna dolor,
          sit amet dignissim lectus auctor id. Vestibulum congue elit id mi
          sagittis mattis. Pellentesque semper lacinia eros sit amet fringilla.
          Donec et risus sit amet nunc dapibus imperdiet nec a elit. Praesent
          aliquet, nisi ac vestibulum interdum, nulla ex mollis odio, vitae
          sagittis dui ligula ac tortor. Duis tempor, tortor eu efficitur
          laoreet, lectus dolor porta tortor, sed convallis ipsum nisl sit amet
          nisi. Phasellus eget neque a dolor rutrum cursus ut vulputate urna.
          Nam sit amet dolor dignissim, aliquam turpis sit amet, auctor mi. Ut
          quis tellus eu nulla suscipit aliquet. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Aenean
          sapien ipsum, aliquam non lectus et, posuere iaculis diam. Donec ante
          leo, posuere ut congue et, fringilla imperdiet enim. Quisque auctor,
          tellus ac lacinia aliquam, enim velit bibendum leo, in hendrerit nisl
          sapien eget leo. Aenean eu nulla vitae neque suscipit mattis. Cras
          neque risus, venenatis eu leo in, imperdiet euismod diam. In nec
          laoreet dui. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Nam dignissim
          ante in quam imperdiet, eu pellentesque orci sollicitudin. Donec
          egestas odio id leo accumsan, eget pretium lectus sollicitudin.
          Integer nisi velit, pellentesque in arcu ac, hendrerit fermentum dui.
          Curabitur volutpat tincidunt metus vel blandit. Nullam sed pulvinar
          massa. Aenean in pretium magna. In odio nulla, efficitur ac purus
          viverra, dictum maximus nisi. Duis ac felis sem. Vivamus sodales velit
          nec ex euismod cursus. Ut consectetur sed sapien sit amet elementum.
          Donec nec dui volutpat magna tempus finibus. Proin bibendum ipsum eu
          scelerisque convallis. Maecenas et semper enim. Ut finibus vehicula
          vehicula. Pellentesque sit amet suscipit massa, non dapibus arcu.
          Curabitur tristique neque vitae finibus semper. Nunc ultrices quam
          quis lacus rutrum ullamcorper. Integer fermentum nec tellus sit amet
          porta.
        </StyledParagraph>
      </Layout>
    );
  }
}

export default withRouter(Post);
