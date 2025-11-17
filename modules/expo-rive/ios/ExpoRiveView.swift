import ExpoModulesCore
import SwiftUI
import RiveRuntime

struct RiveSwiftUIView: View {
  let url: URL

  var body: some View {
    RiveViewModel(
      webURL: url.absoluteString
    ).view()
  }
}

class ExpoRiveView: ExpoView {
  private var hostingController: UIHostingController<RiveSwiftUIView>?

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    clipsToBounds = true
  }

  func setUrl(_ urlString: String) {
    guard let url = URL(string: urlString) else { return }

    if hostingController == nil {
      let swiftUIView = RiveSwiftUIView(url: url)
      let hosting = UIHostingController(rootView: swiftUIView)
      hosting.view.backgroundColor = .clear

      addSubview(hosting.view)
      hosting.view.translatesAutoresizingMaskIntoConstraints = false

      NSLayoutConstraint.activate([
        hosting.view.leadingAnchor.constraint(equalTo: leadingAnchor),
        hosting.view.trailingAnchor.constraint(equalTo: trailingAnchor),
        hosting.view.topAnchor.constraint(equalTo: topAnchor),
        hosting.view.bottomAnchor.constraint(equalTo: bottomAnchor),
      ])

      hostingController = hosting
    } else {
      // Aggiorna solo la rootView quando cambia l’URL
      hostingController?.rootView = RiveSwiftUIView(url: url)
    }
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    hostingController?.view.frame = bounds
  }
}
