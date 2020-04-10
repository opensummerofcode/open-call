<script>
  import FAQitem from './FAQ-item.svelte';
  import faqData from '../data/faq';

  const data = faqData.map((item, i) => {
    item.id = i;
    return item;
  });
</script>

<div class="background-wrapper site-section" data-aos="fade-up">
  <section id="faq" class="container">
    <h2>Frequently asked questions</h2>
    <p>
      Please read this FAQ section thoroughly so that you know what you're
      getting yourself into. If you can't find the answer on your question
      below, please send us an email at
      <a href="mailto:opencall@openknowledge.be">opencall@openknowledge.be</a>
      .
    </p>
    <dl>
      {#each data as faqItem (faqItem.id)}
        <FAQitem id={faqItem.id}>
          <span slot="question">{faqItem.question}</span>
          <span slot="answer">
            {@html faqItem.answer}
          </span>
        </FAQitem>
      {/each}
    </dl>
  </section>
</div>

<style>
  .background-wrapper {
    background: var(--color-off-white);
    padding: 5rem 0;
    margin-top: 10rem;
  }

  h2 {
    margin-bottom: 2rem;
  }
</style>
