type HomeProps = {
  searchParams: {
    error?: string
  }
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="gift-page password-page">
      <div className="corners-overlay" aria-hidden="true">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
      </div>

      <section className="password-card" aria-labelledby="password-title">
        <p className="subtitle">A little surprise awaits</p>
        <h1 className="gift-title" id="password-title">
          Just for <span>you</span>
        </h1>
        <p className="description">Enter a password to open your special gift.</p>

        <form action="/api/unlock" method="post" className="password-form">
          <label className="password-label" htmlFor="password">
            Enter a password
          </label>
          <input
            autoComplete="off"
            autoFocus
            className="password-input"
            id="password"
            inputMode="numeric"
            maxLength={4}
            name="password"
            pattern="[0-9]{4}"
            placeholder="••••"
            required
            type="password"
            aria-describedby={searchParams.error === '1' ? 'password-error' : undefined}
          />
          {searchParams.error === '1' && (
            <p className="password-error" id="password-error" role="alert">
              That password isn’t quite right. Try again.
            </p>
          )}
          <button className="btn-primary password-submit" type="submit">
            Open your gift
          </button>
        </form>
        <p className="password-hint">4 digits · A little birthday magic</p>
      </section>
    </main>
  )
}
