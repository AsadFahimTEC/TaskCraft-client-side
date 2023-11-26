
import './Type.css';

const Type = () => {
  return (
    <div>
      <div id="tsum-tabs">
        <h1 className='text-xl font-semibold text-blue-600'>Find a Tour By</h1>
        <h1 className='text-2xl font-bold text-green-600'>Tour Type</h1>
        <main>
          <input id="tab1" type="radio" name="tabs" defaultChecked />
          <label htmlFor="tab1">Codepen</label>

          <input id="tab2" type="radio" name="tabs" defaultChecked />
          <label htmlFor="tab2">Dribbble</label>

          <input id="tab3" type="radio" name="tabs" defaultChecked />
          <label htmlFor="tab3">Dropbox</label>

          <input id="tab4" type="radio" name="tabs" defaultChecked />
          <label htmlFor="tab4">Drupal</label>

          <section id="content1">
            <p>CONTENT FIR TAB 1</p>
          </section>

          <section id="content2">
            <p>CONTENT FIR TAB 2</p>
          </section>

          <section id="content3">
            <p>CONTENT FIR TAB 3</p>
          </section>

          <section id="content4">
            <p>CONTENT FIR TAB 4</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Type;
