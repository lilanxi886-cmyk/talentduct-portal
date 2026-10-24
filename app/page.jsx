'use client';

import Script from 'next/script';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Segoe UI, Roboto, sans-serif', padding: '40px 20px', maxWidth: '900px', margin: '0 auto', color: '#1e293b' }}>
      <header style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ color: '#0f172a', fontSize: '32px', margin: '0 0 10px 0' }}>TalentDuct Recruitment Portal</h1>
        <p style={{ fontSize: '16px', color: '#64748b', margin: 0 }}>
          Enterprise Candidate & Client Management Platform
        </p>
      </header>

      <section style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '20px', color: '#0284c7', marginTop: 0 }}>Active Job Requisitions</h2>
        <p style={{ color: '#475569', fontSize: '15px' }}>
          Explore featured roles managed via our intelligent Salesforce Agentforce backend:
        </p>
        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '17px' }}>Senior Cloud Solutions Architect</h3>
            <span style={{ fontSize: '13px', background: '#e0f2fe', color: '#0369a1', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>REQ-0001</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#64748b' }}>Domain: Technology | Location: Brisbane, QLD | Priority: High</p>
          </div>
          <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '17px' }}>Lead Salesforce Enterprise Consultant</h3>
            <span style={{ fontSize: '13px', background: '#f1f5f9', color: '#475569', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>REQ-0002</span>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#64748b' }}>Domain: Enterprise Applications | Priority: Medium</p>
          </div>
        </div>
      </section>

      <section style={{ border: '1px dashed #94a3b8', borderRadius: '12px', padding: '24px', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#334155' }}>Need Instant Candidate Screening or Status?</h3>
        <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
          Click the chat button at the bottom right corner to interact directly with our autonomous <strong>TalentDuct Service Agent</strong>.
        </p>
      </section>

      {/* 嵌入 Salesforce Agentforce 脚本 */}
      <Script
        id="salesforce-agent-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function initEmbeddedMessaging() {
              try {
                embeddedservice_bootstrap.settings.language = 'en_US';
                embeddedservice_bootstrap.init(
                  '00Dbm000014yaFW',
                  'TalentDuct_Service_Agent',
                  'https://orgfarm-5029b8d1cb-dev-ed.develop.my.site.com/ESWTalentDuctSer1792847040809',
                  {
                    scrt2URL: 'https://orgfarm-5029b8d1cb-dev-ed.develop.my.salesforce-scrt.com'
                  }
                );
              } catch (err) {
                console.error('Error loading Embedded Messaging: ', err);
              }
            }
          `
        }}
      />
      <Script
        src="https://orgfarm-5029b8d1cb-dev-ed.develop.my.site.com/ESWTalentDuctSer1792847040809/assets/js/bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && typeof window.initEmbeddedMessaging === 'function') {
            window.initEmbeddedMessaging();
          }
        }}
      />
    </main>
  );
}
